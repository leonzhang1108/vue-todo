<template>
  <Item :msg='msg'></Item>
</template>
<script>
import Item from './TreeItem'
export default {
  data () {
    return {
      msg: [
        {
          text: 1,
          next: [
            {
              text: '1-1',
              next: [
                {
                  text: '1-1-1',
                  next: [
                    {
                      text: '1-1-1-1'
                    }
                  ]
                }
              ]
            }, {
              text: '1-2'
            }
          ]
        }, {
          text: 2,
          next: [
            {
              text: '2-1'
            }
          ]
        }, {
          text: 3,
          next: [
            {
              text: '3-1'
            }
          ]
        }
      ]
    }
  },
  components: {
    Item
  }
}
</script>


