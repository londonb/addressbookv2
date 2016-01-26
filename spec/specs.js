describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
      var testContact = new Contact("Sherlock","Holmes");
      expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });
});

describe('Pets', function(){
  it("creates a new pet with the given specifications", function() {
    var testPet = new Pet("Astro", "Dog", "Black");
    expect(testPet.name).to.equal("Astro");
    expect(testPet.type).to.equal("Dog");
    expect(testPet.color).to.equal("Black");
  });
  it("adds the fullPets method to address", function() {
    var testPet = new Pet("Astro", "Dog", "Black");
    expect(testPet.fullPets()).to.equal("Astro, Dog, Black");
  });
});
