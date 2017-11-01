<template>
  <div>
    <TitleList :msgs="msgs">
      <h1
        slot="msg"
        slot-scope="props"
      >
        parent{{props.index + 1}}: {{ props.content }}
      </h1>
    </TitleList>
    <ChildList 
      v-for="(msg, index) in msgs" 
      key='index' :child-msg='msg' 
      :index='index' 
      @onChildClick='childEvent' 
    >
      <div slot="header">this is header</div>
      <div slot="footer">this is footer</div>
    </ChildList>
  </div>
</template>

<script>
import TitleList from '@/components/Title'
import ChildList from '@/components/Child'
export default {
  name: 'ComponentDemo',
  components: {
    ChildList,
    TitleList
  },
  data () {
    return {
      msgs: [{
        content: 'first msg'
      }, {
        content: 'second msg'
      }, {
        content: 'thrid msg'
      }]
    }
  },
  watch: {
    msgs: {
      handler (newMsgs, oldMsgs) {
        newMsgs.forEach(msg => {
          console.log(msg.content)
        })
      },
      deep: true
    }
  },
  methods: {
    childEvent: function (index) {
      console.log('lalala')
      console.log(`the index is ${index}`)
    }
  }
}
</script>
