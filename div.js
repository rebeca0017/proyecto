

/*(function ($) {
  $.fn.myPlugin = function (options) {
    $.extend({
      div='',
      clase=''

    }, options);

    this.each(function () {

      var div = document.createElement('div');
      div.setAttribute("id", "div1");
      div.setAttribute('class', 'hola')
      document.body.appendChild(div);

    });

    return this;
  }
})(jQuery);*/


/*function div(id,clase){
  this.id=id;
  this.clase=clase;
}
var id= new div('div1');
var clase= new div('class')
*/

jQuery.fn.extend({
  myPlugin: function(options){
    defaults={
      id:'dialogo',
      title:'Título de la caja',
      style:'display: none'
    }
    var options=$.extend({}, defaults,options);

    this.each(function(){
      //jQuery(this).css('background-color',options.color);
    
      var div = document.createElement('div');
      div.setAttribute("id",options.id);
      div.setAttribute('title',options.title)
      div.setAttribute('style',options.style)
      document.body.appendChild(div);
        
      
      
    })
  }
})
