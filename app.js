fetch('https://dog.ceo/api/breeds/image/random')
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data)
  document.getElementById("img").src = data.message;
})
