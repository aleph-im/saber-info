<template>
  <q-card class="bg-card">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="white"
      indicator-color="white"
      narrow-indicator
      no-caps
      align="left"
      style="position: absolute; z-index: 10; padding: 7px 16px;"
    >
      <q-tab name="all" label="All" />
      <q-tab name="swap" label="Swaps" />
      <q-tab name="deposit" label="Adds" />
      <q-tab name="withdraw" label="Removes" />
    </q-tabs>
    <q-table :rows="formattedEvents"
            :columns="eventCols"
            flat
            card-class="bg-transparent"
            :pagination="{rowsPerPage: 15}">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props" class="text-white" style="min-width: 350px">
            <a v-if="props.row.type == 'swap'" :href="`https://solscan.io/tx/${props.row.signature}`" target="_blank" rel="noopener">
              Swap {{ props.row.meta.source_token ? get_token(props.row.meta.source_token.address).symbol : "???" }} for {{  props.row.meta.target_token ? get_token(props.row.meta.target_token.address).symbol : "???" }}
            </a>
            <a v-else-if="props.row.meta.pool && (props.row.type == 'deposit')" :href="`https://solscan.io/tx/${props.row.signature}`" target="_blank" rel="noopener">
              Add {{ get_token(props.row.meta.pool.coin.address).symbol }} and {{ get_token(props.row.meta.pool.pc.address).symbol }}
            </a>
            <a v-else-if="props.row.meta.pool && (props.row.type == 'withdraw')" :href="`https://solscan.io/tx/${props.row.signature}`" target="_blank" rel="noopener">
              Remove {{ get_token(props.row.meta.pool.coin.address).symbol }} and {{ get_token(props.row.meta.pool.pc.address).symbol }}
            </a>
            <a v-else-if="props.row.meta.pool && (props.row.type == 'withdrawOne')" :href="`https://solscan.io/tx/${props.row.signature}`" target="_blank" rel="noopener">
              Remove {{ props.row.pc_amount ? get_token(props.row.meta.pool.pc.address).symbol : get_token(props.row.meta.pool.coin.address).symbol }}
            </a>
            <a v-else :href="`https://solscan.io/tx/${props.row.signature}`" target="_blank" rel="noopener">
              {{props.row.type}}
            </a>
          </q-td>
          <q-td key="usd_value" :props="props">
            {{ numeral(props.row.usd_value).format("0,0[.]00 $") }}
          </q-td>
          <q-td key="source_amount" :props="props">
            <template v-if="props.row.source_token">
            {{ numeral(
              props.row.source_amount).divide(10**props.row.source_token.decimals)
              .format(`0,0[.]00`) }} {{props.row.source_token.symbol}}
            </template>
          </q-td>
          <q-td key="target_amount" :props="props">
            <template v-if="props.row.target_token">
            {{ numeral(
              props.row.target_amount).divide(10**props.row.target_token.decimals)
              .format(`0,0[.]00`) }} {{props.row.target_token.symbol}}
            </template>
          </q-td>
          <q-td key="owner" :props="props" class="address">
            <a :href="`https://solscan.io/account/${props.row.owner}`" target="_blank" rel="noopener">
              {{props.row.owner}}
            </a>
          </q-td>
          <q-td key="blockTime" :props="props">
            {{moment.unix(props.row.blockTime).fromNow()}}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>


<script>
import { defineComponent } from 'vue'
import numeral from "numeral"
import moment from "moment"
import { get_token } from '../services/tokens'

export default defineComponent({
  name: 'EventsTable',
  props: [
    'events'
  ],
  computed: {
    filteredEvents() {
      let events = this.events.filter((ev) => (
        (!ev.meta.usd_value)||(ev.meta.usd_value > 10)
      ))
      if (this.tab === "all")
        return events
      else {
        
        return events.filter((ev) => (ev.type.includes(this.tab)))
      }
    },
    formattedEvents() {
      return this.filteredEvents.map((ev) => ({
        title: ev.type,
        usd_value: ev.meta.usd_value,
        source_amount: ev.meta.source_amount ? ev.meta.source_amount : ev.meta.pc_amount,
        source_token: ev.meta.source_amount ? ev.meta.source_token : (ev.meta.pool ? ev.meta.pool.pc : null),
        target_amount: ev.meta.target_amount ? ev.meta.target_amount : ev.meta.coin_amount,
        target_token: ev.meta.target_amount ? ev.meta.target_token : (ev.meta.pool ? ev.meta.pool.coin : null),
        owner: ev.meta.owner,
        ...ev
      }))
    }
  },
  data() {
    return {
      tab: "all",
      moment: moment,
      numeral: numeral,
      get_token: get_token,
      eventCols: [
        {
          name: 'title',
          field: 'title',
          align: 'left'
        },
        {
          name: 'usd_value',
          field: 'usd_value',
          align: 'right',
          label: 'Total Value',
          sortable: true
        },
        {
          name: 'source_amount',
          field: 'source_amount',
          align: 'right',
          label: 'Source',
          sortable: true
        },
        {
          name: 'target_amount',
          field: 'target_amount',
          align: 'right',
          label: 'Target',
          sortable: true
        },
        {
          name: 'owner',
          field: 'owner',
          align: 'left',
          label: 'Owner',
          sortable: true
        },
        {
          name: 'blockTime',
          field: 'blockTime',
          align: 'right',
          label: 'Time',
          sortable: true
        }
      ]
    }
  }
})
</script>