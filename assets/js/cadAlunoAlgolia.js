(function() {
    var placesAutocomplete = places({
      appId: 'plOIK1KGTX7Z',
      apiKey: '3528eeb449959e928e53f417c0d1fd6d',
      container: document.querySelector('#form-address'),
      templates: {
        value: function(suggestion) {
          return suggestion.name;
        }
      }
    }).configure({
      type: 'address'
    });
    placesAutocomplete.on('change', function resultSelected(e) {
      document.querySelector('#regiao').value = e.suggestion.administrative || '';
      document.querySelector('#cidade').value = e.suggestion.city || '';
      document.querySelector('#cep').value = e.suggestion.postcode || '';
    });
  })();