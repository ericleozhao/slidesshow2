var allButtons = $('#buttons>ul>li')
for(let i = 0 ;i<allButtons.length; i++){
	$(allButtons[i]).on('click',function(e){
		console.log(1)
		console.log($(e.currentTarget).index())
      var index = $(e.currentTarget).index()
      console.log(index)
      var p = index * -920
      $('#images').css({
      	transform :'translateX(' + p + 'px)'
      })
})
}