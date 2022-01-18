$(() => {


  $('.card-container').hide()
 
  const loadCoinData = (list) => {
  for (i = 0; i < 100; i++) {
    $("#cards-container").append(`
    <div class="col-sm-4">
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${list[i].symbol}Coin </h5>
      <p class="card-text">${list[i].name}Coin Name</p>
      <a href="#" class="btn btn-primary">More Info</a>
      <div class="form-check form-switch" id="toggle-btn">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            </div>
      </div>  
      </div>
      </div>
      `
    )}
  }

$('#load-coins').click(function () {

  $.ajax({
    url: (`https://api.coingecko.com/api/v3/coins/list`),
    success: data => {
      loadCoinData(data)
    }
  })
})
















})

