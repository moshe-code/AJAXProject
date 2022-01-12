$( () => {

const loadCoinData = () => {
  for (i = 0;i < 20; i++){
    $(".card-container").append(`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${List[i].symbol}Coin </h5>
        <p class="card-text">${List[i].name}Coin Name</p>
        <a href="#" class="btn btn-primary">More Info</a>
    </div>  
    <div class="form-check form-switch" id="toggle-btn">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
</div>
</div>
    `
    )
  }
  
  
  loadCoinData()
}})

$('#load-coins').click(function (){

  $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/list`,
    success: data =>{
      console.table(data)
    }
  })
})