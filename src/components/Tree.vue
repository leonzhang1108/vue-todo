<template>
  <div>
    <ggg :msg='msg'></ggg>
  </div>
</template>
<script>
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
          text: 2
        }, {
          text: 3
        }
      ]
    }
  },
  components: {
    ggg: {
      name: 'gs',
      template: `
      <ul>
        <li v-for='a in msg' @click.stop.self='show=!show'>
          {{a.text}}
          <gs :msg='a.next' v-if='show' ></gs>
        </li>
      </ul>`,
      props: ['msg'],
      data () {
        return {
          show: false
        }
      }
    }
  }
}
</script>


