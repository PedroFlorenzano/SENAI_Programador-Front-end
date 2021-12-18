


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Pedro Henrique Damaso Florenzano Gonçalves",
      "description" : "Api feita para um site de jogos"
    });
  }
}

