<template>
  <Item class="tree-form" :msg='msg'></Item>
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
<style>
ul {
  margin: 0 0 0 25px;
  padding: 0;
}
.tree-form>li:first-child:before {
  border-left: 1px solid #999;
  bottom: 50%;
  height: 100%;
  top: 30px;
  width: 1px;
}
.tree-form li:last-child:before {
  height: 40px;
}
.tree-li {
  list-style-type: none;
  margin: 0;
  padding: 20px 5px 0 5px;
  position: relative;
  text-align: left;
}
.tree-li:before,
.tree-li:after {
  content: '';
  left: -11px;
  position: absolute;
  right: auto;
  border-width: 1px;
  z-index: -1;
}
.tree-li:before {
  border-left: 1px solid #999;
  bottom: 50px;
  height: 100%;
  top: -10px;
  width: 1px;
}
.tree-li:after {
  border-top: 1px solid #999;
  height: 20px;
  top: 29px;
  width: 20px;
}
.text {
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 5px 8px;
  margin: 10px 0;
  background: #fff;
  display: inline;
}
.add-btn {
  background: #ccc;
  width: 20px;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
}
span.arrow {
  display: inline-block;
  width: 20px;
  text-align: center;
}

</style>