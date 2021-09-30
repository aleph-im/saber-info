
<template>
  <q-page class="q-pa-xl">
    <div class="rounded-borders q-pa-one">
      <q-table
        title="Pools"
        :rows="displayed_pools"
        :columns="poolcols"
        row-key="name"
        :pagination="{
          rowsPerPage: 25,
          sortBy: 'tvl_usd',
          descending: true
        }"
        class="bg-dark-opacity"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props" class="text-white">
              <router-link :to="{ name: 'pool', params: { address: props.row.ammId }}"  class="text-white text-bold">
              <q-avatar size="xs">
                <img :src="props.row.coin.logoURI">
              </q-avatar>
              <q-avatar size="xs">
                <img :src="props.row.pc.logoURI">
              </q-avatar>
                {{ props.row.coin.symbol }}-{{ props.row.pc.symbol }}
              </router-link>
            </q-td>
            <q-td key="tvl_usd" :props="props">
              {{ numeral(props.row.tvl_usd).format("0,0 $") }}
            </q-td>
            <q-td key="vol24h_usd" :props="props">
              {{ numeral(props.row.vol24h_usd).format("0,0 $") }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'

import poolquery from '../queries/pools.gql'
import { client } from '../services/graphql'
import numeral from "numeral"
import moment from "moment"
import {useStore} from "vuex"
import store from "../store"
import {prepare_pool} from '../utils/pools'


export default defineComponent({
  name: 'IndexPage',
  async setup() {
    let result = await client.request(poolquery)
    console.log(result)
    console.log(store)
    await store.dispatch('update_coin_stats')

    const displayed_pools = computed(() => {
      return result.pools.map(
        (pool) => prepare_pool(pool, store.state.coin_stats)
      ).sort((a, b) => (
        a.tvl_usd < b.tvl_usd
      ))
    })

    return {
      pools: result.pools,
      displayed_pools: displayed_pools,
      poolcols: [
        {
          name: 'name',
          label: 'Pool name',
          field: 'name',
          align: 'left',
          sortable: true
        },
        {
          'name': 'tvl_usd',
          'label': 'TVL',
          'field': 'tvl_usd',
          sortable: true
        },
        {
          'name': 'vol24h_usd',
          'label': 'Volume (24h)',
          'field': 'vol24h_usd',
          sortable: true
        }
      ],
      numeral: numeral
    }
  }

})
</script>
