var previewController,
    renderer = require("../../util"),
    fhc         = require('fh-fhc'),
    http     = require("http"),

  previewController = {
    // every app gets the indexAction, which gets the file tree & passes on
    indexAction: function(req, res, next){
      var id = req.params.id;
      var d = {
          tpl:'app',
          title:'Login',
          appId: id,
          data:{ inst : { guid : id}}, // TODO: This is same as appId - remove need for this!
          tab:'preview'
        };
        renderer.doResponse(req, res, d);
       
    }
};

module.exports = previewController;


  