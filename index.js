$( () => {

const loadCoinData = () => {
  for (i = 0;i < 20; i++){
    let cardStr = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Coin </h5>
        <p class="card-text">Coin Name</p>
        <a href="#" class="btn btn-primary">More Info</a>
    </div>
    
    `
  $('.card-body').append(cardStr)

  }


loadCoinData()
}})


$('#load-coins').click(function (e){
  e.preventDefault()

  $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/list`,
    success: data =>{
      console.table(data)
    }
  })
})