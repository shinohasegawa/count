(function() {
    'use strict';

    const likeComponent = Vue.extend({
        props: {
            message: {
              type: String,
              default: 'いいね!'
            }
          },
          data: function() {
            return {
              count: 0
            }
          },
        template: '<button @click="countUp">いいね! {{ count }}</button>',
        methods: {
            countUp: function() {
                this.count++;
            }
        }
      });
    
    const app = new Vue({
        el: '#conponent-app',
        components: {
          'like-button': likeComponent
        }
      });
})();