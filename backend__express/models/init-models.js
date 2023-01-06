import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  // file .env
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _addresstype = require("./addresstype");
var _billofmaterials = require("./billofmaterials");
var _businessentity = require("./businessentity");
var _businessentityaddress = require("./businessentityaddress");
var _businessentitycontact = require("./businessentitycontact");
var _contacttype = require("./contacttype");
var _countryregion = require("./countryregion");
var _countryregioncurrency = require("./countryregioncurrency");
var _creditcard = require("./creditcard");
var _culture = require("./culture");
var _currency = require("./currency");
var _currencyrate = require("./currencyrate");
var _customer = require("./customer");
var _department = require("./department");
var _document = require("./document");
var _emailaddress = require("./emailaddress");
var _employee = require("./employee");
var _employeedepartmenthistory = require("./employeedepartmenthistory");
var _employeepayhistory = require("./employeepayhistory");
var _illustration = require("./illustration");
var _jobcandidate = require("./jobcandidate");
var _location = require("./location");
var _password = require("./password");
var _person = require("./person");
var _personcreditcard = require("./personcreditcard");
var _personphone = require("./personphone");
var _phonenumbertype = require("./phonenumbertype");
var _product = require("./product");
var _productcategory = require("./productcategory");
var _productcosthistory = require("./productcosthistory");
var _productdescription = require("./productdescription");
var _productdocument = require("./productdocument");
var _productinventory = require("./productinventory");
var _productlistpricehistory = require("./productlistpricehistory");
var _productmodel = require("./productmodel");
var _productmodelillustration = require("./productmodelillustration");
var _productmodelproductdescriptionculture = require("./productmodelproductdescriptionculture");
var _productphoto = require("./productphoto");
var _productproductphoto = require("./productproductphoto");
var _productreview = require("./productreview");
var _productsubcategory = require("./productsubcategory");
var _productvendor = require("./productvendor");
var _purchaseorderdetail = require("./purchaseorderdetail");
var _purchaseorderheader = require("./purchaseorderheader");
var _salesorderdetail = require("./salesorderdetail");
var _salesorderheader = require("./salesorderheader");
var _salesorderheadersalesreason = require("./salesorderheadersalesreason");
var _salesperson = require("./salesperson");
var _salespersonquotahistory = require("./salespersonquotahistory");
var _salesreason = require("./salesreason");
var _salestaxrate = require("./salestaxrate");
var _salesterritory = require("./salesterritory");
var _salesterritoryhistory = require("./salesterritoryhistory");
var _scrapreason = require("./scrapreason");
var _shift = require("./shift");
var _shipmethod = require("./shipmethod");
var _shoppingcartitem = require("./shoppingcartitem");
var _specialoffer = require("./specialoffer");
var _specialofferproduct = require("./specialofferproduct");
var _stateprovince = require("./stateprovince");
var _store = require("./store");
var _transactionhistory = require("./transactionhistory");
var _transactionhistoryarchive = require("./transactionhistoryarchive");
var _unitmeasure = require("./unitmeasure");
var _vendor = require("./vendor");
var _workorder = require("./workorder");
var _workorderrouting = require("./workorderrouting");

const initModels = (sequelize) => {
  var address = _address(sequelize, DataTypes);
  var addresstype = _addresstype(sequelize, DataTypes);
  var billofmaterials = _billofmaterials(sequelize, DataTypes);
  var businessentity = _businessentity(sequelize, DataTypes);
  var businessentityaddress = _businessentityaddress(sequelize, DataTypes);
  var businessentitycontact = _businessentitycontact(sequelize, DataTypes);
  var contacttype = _contacttype(sequelize, DataTypes);
  var countryregion = _countryregion(sequelize, DataTypes);
  var countryregioncurrency = _countryregioncurrency(sequelize, DataTypes);
  var creditcard = _creditcard(sequelize, DataTypes);
  var culture = _culture(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var currencyrate = _currencyrate(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var document = _document(sequelize, DataTypes);
  var emailaddress = _emailaddress(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employeedepartmenthistory = _employeedepartmenthistory(sequelize, DataTypes);
  var employeepayhistory = _employeepayhistory(sequelize, DataTypes);
  var illustration = _illustration(sequelize, DataTypes);
  var jobcandidate = _jobcandidate(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var password = _password(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var personcreditcard = _personcreditcard(sequelize, DataTypes);
  var personphone = _personphone(sequelize, DataTypes);
  var phonenumbertype = _phonenumbertype(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productcategory = _productcategory(sequelize, DataTypes);
  var productcosthistory = _productcosthistory(sequelize, DataTypes);
  var productdescription = _productdescription(sequelize, DataTypes);
  var productdocument = _productdocument(sequelize, DataTypes);
  var productinventory = _productinventory(sequelize, DataTypes);
  var productlistpricehistory = _productlistpricehistory(sequelize, DataTypes);
  var productmodel = _productmodel(sequelize, DataTypes);
  var productmodelillustration = _productmodelillustration(sequelize, DataTypes);
  var productmodelproductdescriptionculture = _productmodelproductdescriptionculture(sequelize, DataTypes);
  var productphoto = _productphoto(sequelize, DataTypes);
  var productproductphoto = _productproductphoto(sequelize, DataTypes);
  var productreview = _productreview(sequelize, DataTypes);
  var productsubcategory = _productsubcategory(sequelize, DataTypes);
  var productvendor = _productvendor(sequelize, DataTypes);
  var purchaseorderdetail = _purchaseorderdetail(sequelize, DataTypes);
  var purchaseorderheader = _purchaseorderheader(sequelize, DataTypes);
  var salesorderdetail = _salesorderdetail(sequelize, DataTypes);
  var salesorderheader = _salesorderheader(sequelize, DataTypes);
  var salesorderheadersalesreason = _salesorderheadersalesreason(sequelize, DataTypes);
  var salesperson = _salesperson(sequelize, DataTypes);
  var salespersonquotahistory = _salespersonquotahistory(sequelize, DataTypes);
  var salesreason = _salesreason(sequelize, DataTypes);
  var salestaxrate = _salestaxrate(sequelize, DataTypes);
  var salesterritory = _salesterritory(sequelize, DataTypes);
  var salesterritoryhistory = _salesterritoryhistory(sequelize, DataTypes);
  var scrapreason = _scrapreason(sequelize, DataTypes);
  var shift = _shift(sequelize, DataTypes);
  var shipmethod = _shipmethod(sequelize, DataTypes);
  var shoppingcartitem = _shoppingcartitem(sequelize, DataTypes);
  var specialoffer = _specialoffer(sequelize, DataTypes);
  var specialofferproduct = _specialofferproduct(sequelize, DataTypes);
  var stateprovince = _stateprovince(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var transactionhistory = _transactionhistory(sequelize, DataTypes);
  var transactionhistoryarchive = _transactionhistoryarchive(sequelize, DataTypes);
  var unitmeasure = _unitmeasure(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);
  var workorder = _workorder(sequelize, DataTypes);
  var workorderrouting = _workorderrouting(sequelize, DataTypes);

  person.belongsToMany(phonenumbertype, { as: 'phonenumbertypeid_phonenumbertypes', through: personphone, foreignKey: "businessentityid", otherKey: "phonenumbertypeid" });
  phonenumbertype.belongsToMany(person, { as: 'businessentityid_people', through: personphone, foreignKey: "phonenumbertypeid", otherKey: "businessentityid" });
  document.belongsToMany(product, { as: 'productid_products', through: productdocument, foreignKey: "documentnode", otherKey: "productid" });
  illustration.belongsToMany(productmodel, { as: 'productmodelid_productmodels', through: productmodelillustration, foreignKey: "illustrationid", otherKey: "productmodelid" });
  location.belongsToMany(product, { as: 'productid_product_productinventories', through: productinventory, foreignKey: "locationid", otherKey: "productid" });
  product.belongsToMany(document, { as: 'documentnode_documents', through: productdocument, foreignKey: "productid", otherKey: "documentnode" });
  product.belongsToMany(location, { as: 'locationid_locations', through: productinventory, foreignKey: "productid", otherKey: "locationid" });
  product.belongsToMany(productphoto, { as: 'productphotoid_productphotos', through: productproductphoto, foreignKey: "productid", otherKey: "productphotoid" });
  productmodel.belongsToMany(illustration, { as: 'illustrationid_illustrations', through: productmodelillustration, foreignKey: "productmodelid", otherKey: "illustrationid" });
  productphoto.belongsToMany(product, { as: 'productid_product_productproductphotos', through: productproductphoto, foreignKey: "productphotoid", otherKey: "productid" });
  product.belongsToMany(vendor, { as: 'businessentityid_vendors', through: productvendor, foreignKey: "productid", otherKey: "businessentityid" });
  vendor.belongsToMany(product, { as: 'productid_product_productvendors', through: productvendor, foreignKey: "businessentityid", otherKey: "productid" });
  countryregion.belongsToMany(currency, { as: 'currencycode_currencies', through: countryregioncurrency, foreignKey: "countryregioncode", otherKey: "currencycode" });
  creditcard.belongsToMany(person, { as: 'businessentityid_person_personcreditcards', through: personcreditcard, foreignKey: "creditcardid", otherKey: "businessentityid" });
  currency.belongsToMany(countryregion, { as: 'countryregioncode_countryregions', through: countryregioncurrency, foreignKey: "currencycode", otherKey: "countryregioncode" });
  person.belongsToMany(creditcard, { as: 'creditcardid_creditcards', through: personcreditcard, foreignKey: "businessentityid", otherKey: "creditcardid" });
  product.belongsToMany(specialoffer, { as: 'specialofferid_specialoffers', through: specialofferproduct, foreignKey: "productid", otherKey: "specialofferid" });
  salesorderheader.belongsToMany(salesreason, { as: 'salesreasonid_salesreasons', through: salesorderheadersalesreason, foreignKey: "salesorderid", otherKey: "salesreasonid" });
  salesperson.belongsToMany(salesterritory, { as: 'territoryid_salesterritories', through: salesterritoryhistory, foreignKey: "businessentityid", otherKey: "territoryid" });
  salesreason.belongsToMany(salesorderheader, { as: 'salesorderid_salesorderheaders', through: salesorderheadersalesreason, foreignKey: "salesreasonid", otherKey: "salesorderid" });
  salesterritory.belongsToMany(salesperson, { as: 'businessentityid_salespeople', through: salesterritoryhistory, foreignKey: "territoryid", otherKey: "businessentityid" });
  specialoffer.belongsToMany(product, { as: 'productid_product_specialofferproducts', through: specialofferproduct, foreignKey: "specialofferid", otherKey: "productid" });
  employeedepartmenthistory.belongsTo(department, { as: "department", foreignKey: "departmentid"});
  department.hasMany(employeedepartmenthistory, { as: "employeedepartmenthistories", foreignKey: "departmentid"});
  employeedepartmenthistory.belongsTo(employee, { as: "businessentity", foreignKey: "businessentityid"});
  employee.hasMany(employeedepartmenthistory, { as: "employeedepartmenthistories", foreignKey: "businessentityid"});
  employeepayhistory.belongsTo(employee, { as: "businessentity", foreignKey: "businessentityid"});
  employee.hasMany(employeepayhistory, { as: "employeepayhistories", foreignKey: "businessentityid"});
  jobcandidate.belongsTo(employee, { as: "businessentity", foreignKey: "businessentityid"});
  employee.hasMany(jobcandidate, { as: "jobcandidates", foreignKey: "businessentityid"});
  employee.belongsTo(person, { as: "businessentity", foreignKey: "businessentityid"});
  person.hasOne(employee, { as: "employee", foreignKey: "businessentityid"});
  employeedepartmenthistory.belongsTo(shift, { as: "shift", foreignKey: "shiftid"});
  shift.hasMany(employeedepartmenthistory, { as: "employeedepartmenthistories", foreignKey: "shiftid"});
  businessentityaddress.belongsTo(address, { as: "address", foreignKey: "addressid"});
  address.hasMany(businessentityaddress, { as: "businessentityaddresses", foreignKey: "addressid"});
  businessentityaddress.belongsTo(addresstype, { as: "addresstype", foreignKey: "addresstypeid"});
  addresstype.hasMany(businessentityaddress, { as: "businessentityaddresses", foreignKey: "addresstypeid"});
  businessentityaddress.belongsTo(businessentity, { as: "businessentity", foreignKey: "businessentityid"});
  businessentity.hasMany(businessentityaddress, { as: "businessentityaddresses", foreignKey: "businessentityid"});
  businessentitycontact.belongsTo(businessentity, { as: "businessentity", foreignKey: "businessentityid"});
  businessentity.hasMany(businessentitycontact, { as: "businessentitycontacts", foreignKey: "businessentityid"});
  person.belongsTo(businessentity, { as: "businessentity", foreignKey: "businessentityid"});
  businessentity.hasOne(person, { as: "person", foreignKey: "businessentityid"});
  businessentitycontact.belongsTo(contacttype, { as: "contacttype", foreignKey: "contacttypeid"});
  contacttype.hasMany(businessentitycontact, { as: "businessentitycontacts", foreignKey: "contacttypeid"});
  stateprovince.belongsTo(countryregion, { as: "countryregioncode_countryregion", foreignKey: "countryregioncode"});
  countryregion.hasMany(stateprovince, { as: "stateprovinces", foreignKey: "countryregioncode"});
  businessentitycontact.belongsTo(person, { as: "person", foreignKey: "personid"});
  person.hasMany(businessentitycontact, { as: "businessentitycontacts", foreignKey: "personid"});
  emailaddress.belongsTo(person, { as: "businessentity", foreignKey: "businessentityid"});
  person.hasMany(emailaddress, { as: "emailaddresses", foreignKey: "businessentityid"});
  password.belongsTo(person, { as: "businessentity", foreignKey: "businessentityid"});
  person.hasOne(password, { as: "password", foreignKey: "businessentityid"});
  personphone.belongsTo(person, { as: "businessentity", foreignKey: "businessentityid"});
  person.hasMany(personphone, { as: "personphones", foreignKey: "businessentityid"});
  personphone.belongsTo(phonenumbertype, { as: "phonenumbertype", foreignKey: "phonenumbertypeid"});
  phonenumbertype.hasMany(personphone, { as: "personphones", foreignKey: "phonenumbertypeid"});
  stateprovince.belongsTo(salesterritory, { as: "territory", foreignKey: "territoryid"});
  salesterritory.hasMany(stateprovince, { as: "stateprovinces", foreignKey: "territoryid"});
  address.belongsTo(stateprovince, { as: "stateprovince", foreignKey: "stateprovinceid"});
  stateprovince.hasMany(address, { as: "addresses", foreignKey: "stateprovinceid"});
  productmodelproductdescriptionculture.belongsTo(culture, { as: "culture", foreignKey: "cultureid"});
  culture.hasMany(productmodelproductdescriptionculture, { as: "productmodelproductdescriptioncultures", foreignKey: "cultureid"});
  productdocument.belongsTo(document, { as: "documentnode_document", foreignKey: "documentnode"});
  document.hasMany(productdocument, { as: "productdocuments", foreignKey: "documentnode"});
  document.belongsTo(employee, { as: "owner_employee", foreignKey: "owner"});
  employee.hasMany(document, { as: "documents", foreignKey: "owner"});
  productmodelillustration.belongsTo(illustration, { as: "illustration", foreignKey: "illustrationid"});
  illustration.hasMany(productmodelillustration, { as: "productmodelillustrations", foreignKey: "illustrationid"});
  productinventory.belongsTo(location, { as: "location", foreignKey: "locationid"});
  location.hasMany(productinventory, { as: "productinventories", foreignKey: "locationid"});
  workorderrouting.belongsTo(location, { as: "location", foreignKey: "locationid"});
  location.hasMany(workorderrouting, { as: "workorderroutings", foreignKey: "locationid"});
  billofmaterials.belongsTo(product, { as: "component", foreignKey: "componentid"});
  product.hasMany(billofmaterials, { as: "billofmaterials", foreignKey: "componentid"});
  billofmaterials.belongsTo(product, { as: "productassembly", foreignKey: "productassemblyid"});
  product.hasMany(billofmaterials, { as: "productassembly_billofmaterials", foreignKey: "productassemblyid"});
  productcosthistory.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productcosthistory, { as: "productcosthistories", foreignKey: "productid"});
  productdocument.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productdocument, { as: "productdocuments", foreignKey: "productid"});
  productinventory.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productinventory, { as: "productinventories", foreignKey: "productid"});
  productlistpricehistory.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productlistpricehistory, { as: "productlistpricehistories", foreignKey: "productid"});
  productproductphoto.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productproductphoto, { as: "productproductphotos", foreignKey: "productid"});
  productreview.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productreview, { as: "productreviews", foreignKey: "productid"});
  transactionhistory.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(transactionhistory, { as: "transactionhistories", foreignKey: "productid"});
  workorder.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(workorder, { as: "workorders", foreignKey: "productid"});
  productsubcategory.belongsTo(productcategory, { as: "productcategory", foreignKey: "productcategoryid"});
  productcategory.hasMany(productsubcategory, { as: "productsubcategories", foreignKey: "productcategoryid"});
  productmodelproductdescriptionculture.belongsTo(productdescription, { as: "productdescription", foreignKey: "productdescriptionid"});
  productdescription.hasMany(productmodelproductdescriptionculture, { as: "productmodelproductdescriptioncultures", foreignKey: "productdescriptionid"});
  product.belongsTo(productmodel, { as: "productmodel", foreignKey: "productmodelid"});
  productmodel.hasMany(product, { as: "products", foreignKey: "productmodelid"});
  productmodelillustration.belongsTo(productmodel, { as: "productmodel", foreignKey: "productmodelid"});
  productmodel.hasMany(productmodelillustration, { as: "productmodelillustrations", foreignKey: "productmodelid"});
  productmodelproductdescriptionculture.belongsTo(productmodel, { as: "productmodel", foreignKey: "productmodelid"});
  productmodel.hasMany(productmodelproductdescriptionculture, { as: "productmodelproductdescriptioncultures", foreignKey: "productmodelid"});
  productproductphoto.belongsTo(productphoto, { as: "productphoto", foreignKey: "productphotoid"});
  productphoto.hasMany(productproductphoto, { as: "productproductphotos", foreignKey: "productphotoid"});
  product.belongsTo(productsubcategory, { as: "productsubcategory", foreignKey: "productsubcategoryid"});
  productsubcategory.hasMany(product, { as: "products", foreignKey: "productsubcategoryid"});
  workorder.belongsTo(scrapreason, { as: "scrapreason", foreignKey: "scrapreasonid"});
  scrapreason.hasMany(workorder, { as: "workorders", foreignKey: "scrapreasonid"});
  billofmaterials.belongsTo(unitmeasure, { as: "unitmeasurecode_unitmeasure", foreignKey: "unitmeasurecode"});
  unitmeasure.hasMany(billofmaterials, { as: "billofmaterials", foreignKey: "unitmeasurecode"});
  product.belongsTo(unitmeasure, { as: "sizeunitmeasurecode_unitmeasure", foreignKey: "sizeunitmeasurecode"});
  unitmeasure.hasMany(product, { as: "products", foreignKey: "sizeunitmeasurecode"});
  product.belongsTo(unitmeasure, { as: "weightunitmeasurecode_unitmeasure", foreignKey: "weightunitmeasurecode"});
  unitmeasure.hasMany(product, { as: "weightunitmeasurecode_products", foreignKey: "weightunitmeasurecode"});
  workorderrouting.belongsTo(workorder, { as: "workorder", foreignKey: "workorderid"});
  workorder.hasMany(workorderrouting, { as: "workorderroutings", foreignKey: "workorderid"});
  vendor.belongsTo(businessentity, { as: "businessentity", foreignKey: "businessentityid"});
  businessentity.hasOne(vendor, { as: "vendor", foreignKey: "businessentityid"});
  purchaseorderheader.belongsTo(employee, { as: "employee", foreignKey: "employeeid"});
  employee.hasMany(purchaseorderheader, { as: "purchaseorderheaders", foreignKey: "employeeid"});
  productvendor.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(productvendor, { as: "productvendors", foreignKey: "productid"});
  purchaseorderdetail.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(purchaseorderdetail, { as: "purchaseorderdetails", foreignKey: "productid"});
  purchaseorderdetail.belongsTo(purchaseorderheader, { as: "purchaseorder", foreignKey: "purchaseorderid"});
  purchaseorderheader.hasMany(purchaseorderdetail, { as: "purchaseorderdetails", foreignKey: "purchaseorderid"});
  purchaseorderheader.belongsTo(shipmethod, { as: "shipmethod", foreignKey: "shipmethodid"});
  shipmethod.hasMany(purchaseorderheader, { as: "purchaseorderheaders", foreignKey: "shipmethodid"});
  productvendor.belongsTo(unitmeasure, { as: "unitmeasurecode_unitmeasure", foreignKey: "unitmeasurecode"});
  unitmeasure.hasMany(productvendor, { as: "productvendors", foreignKey: "unitmeasurecode"});
  productvendor.belongsTo(vendor, { as: "businessentity", foreignKey: "businessentityid"});
  vendor.hasMany(productvendor, { as: "productvendors", foreignKey: "businessentityid"});
  purchaseorderheader.belongsTo(vendor, { as: "vendor", foreignKey: "vendorid"});
  vendor.hasMany(purchaseorderheader, { as: "purchaseorderheaders", foreignKey: "vendorid"});
  salesorderheader.belongsTo(address, { as: "billtoaddress", foreignKey: "billtoaddressid"});
  address.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "billtoaddressid"});
  salesorderheader.belongsTo(address, { as: "shiptoaddress", foreignKey: "shiptoaddressid"});
  address.hasMany(salesorderheader, { as: "shiptoaddress_salesorderheaders", foreignKey: "shiptoaddressid"});
  store.belongsTo(businessentity, { as: "businessentity", foreignKey: "businessentityid"});
  businessentity.hasOne(store, { as: "store", foreignKey: "businessentityid"});
  countryregioncurrency.belongsTo(countryregion, { as: "countryregioncode_countryregion", foreignKey: "countryregioncode"});
  countryregion.hasMany(countryregioncurrency, { as: "countryregioncurrencies", foreignKey: "countryregioncode"});
  salesterritory.belongsTo(countryregion, { as: "countryregioncode_countryregion", foreignKey: "countryregioncode"});
  countryregion.hasMany(salesterritory, { as: "salesterritories", foreignKey: "countryregioncode"});
  personcreditcard.belongsTo(creditcard, { as: "creditcard", foreignKey: "creditcardid"});
  creditcard.hasMany(personcreditcard, { as: "personcreditcards", foreignKey: "creditcardid"});
  salesorderheader.belongsTo(creditcard, { as: "creditcard", foreignKey: "creditcardid"});
  creditcard.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "creditcardid"});
  countryregioncurrency.belongsTo(currency, { as: "currencycode_currency", foreignKey: "currencycode"});
  currency.hasMany(countryregioncurrency, { as: "countryregioncurrencies", foreignKey: "currencycode"});
  currencyrate.belongsTo(currency, { as: "fromcurrencycode_currency", foreignKey: "fromcurrencycode"});
  currency.hasMany(currencyrate, { as: "currencyrates", foreignKey: "fromcurrencycode"});
  currencyrate.belongsTo(currency, { as: "tocurrencycode_currency", foreignKey: "tocurrencycode"});
  currency.hasMany(currencyrate, { as: "tocurrencycode_currencyrates", foreignKey: "tocurrencycode"});
  salesorderheader.belongsTo(currencyrate, { as: "currencyrate", foreignKey: "currencyrateid"});
  currencyrate.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "currencyrateid"});
  salesorderheader.belongsTo(customer, { as: "customer", foreignKey: "customerid"});
  customer.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "customerid"});
  salesperson.belongsTo(employee, { as: "businessentity", foreignKey: "businessentityid"});
  employee.hasOne(salesperson, { as: "salesperson", foreignKey: "businessentityid"});
  customer.belongsTo(person, { as: "person", foreignKey: "personid"});
  person.hasMany(customer, { as: "customers", foreignKey: "personid"});
  personcreditcard.belongsTo(person, { as: "businessentity", foreignKey: "businessentityid"});
  person.hasMany(personcreditcard, { as: "personcreditcards", foreignKey: "businessentityid"});
  shoppingcartitem.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(shoppingcartitem, { as: "shoppingcartitems", foreignKey: "productid"});
  specialofferproduct.belongsTo(product, { as: "product", foreignKey: "productid"});
  product.hasMany(specialofferproduct, { as: "specialofferproducts", foreignKey: "productid"});
  salesorderdetail.belongsTo(salesorderheader, { as: "salesorder", foreignKey: "salesorderid"});
  salesorderheader.hasMany(salesorderdetail, { as: "salesorderdetails", foreignKey: "salesorderid"});
  salesorderheadersalesreason.belongsTo(salesorderheader, { as: "salesorder", foreignKey: "salesorderid"});
  salesorderheader.hasMany(salesorderheadersalesreason, { as: "salesorderheadersalesreasons", foreignKey: "salesorderid"});
  salesorderheader.belongsTo(salesperson, { as: "salesperson", foreignKey: "salespersonid"});
  salesperson.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "salespersonid"});
  salespersonquotahistory.belongsTo(salesperson, { as: "businessentity", foreignKey: "businessentityid"});
  salesperson.hasMany(salespersonquotahistory, { as: "salespersonquotahistories", foreignKey: "businessentityid"});
  salesterritoryhistory.belongsTo(salesperson, { as: "businessentity", foreignKey: "businessentityid"});
  salesperson.hasMany(salesterritoryhistory, { as: "salesterritoryhistories", foreignKey: "businessentityid"});
  store.belongsTo(salesperson, { as: "salesperson", foreignKey: "salespersonid"});
  salesperson.hasMany(store, { as: "stores", foreignKey: "salespersonid"});
  salesorderheadersalesreason.belongsTo(salesreason, { as: "salesreason", foreignKey: "salesreasonid"});
  salesreason.hasMany(salesorderheadersalesreason, { as: "salesorderheadersalesreasons", foreignKey: "salesreasonid"});
  customer.belongsTo(salesterritory, { as: "territory", foreignKey: "territoryid"});
  salesterritory.hasMany(customer, { as: "customers", foreignKey: "territoryid"});
  salesorderheader.belongsTo(salesterritory, { as: "territory", foreignKey: "territoryid"});
  salesterritory.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "territoryid"});
  salesperson.belongsTo(salesterritory, { as: "territory", foreignKey: "territoryid"});
  salesterritory.hasMany(salesperson, { as: "salespeople", foreignKey: "territoryid"});
  salesterritoryhistory.belongsTo(salesterritory, { as: "territory", foreignKey: "territoryid"});
  salesterritory.hasMany(salesterritoryhistory, { as: "salesterritoryhistories", foreignKey: "territoryid"});
  salesorderheader.belongsTo(shipmethod, { as: "shipmethod", foreignKey: "shipmethodid"});
  shipmethod.hasMany(salesorderheader, { as: "salesorderheaders", foreignKey: "shipmethodid"});
  specialofferproduct.belongsTo(specialoffer, { as: "specialoffer", foreignKey: "specialofferid"});
  specialoffer.hasMany(specialofferproduct, { as: "specialofferproducts", foreignKey: "specialofferid"});
  salesorderdetail.belongsTo(specialofferproduct, { as: "product", foreignKey: "productid"});
  specialofferproduct.hasMany(salesorderdetail, { as: "salesorderdetails", foreignKey: "productid"});
  salesorderdetail.belongsTo(specialofferproduct, { as: "specialoffer", foreignKey: "specialofferid"});
  specialofferproduct.hasMany(salesorderdetail, { as: "specialoffer_salesorderdetails", foreignKey: "specialofferid"});
  salestaxrate.belongsTo(stateprovince, { as: "stateprovince", foreignKey: "stateprovinceid"});
  stateprovince.hasMany(salestaxrate, { as: "salestaxrates", foreignKey: "stateprovinceid"});
  customer.belongsTo(store, { as: "store", foreignKey: "storeid"});
  store.hasMany(customer, { as: "customers", foreignKey: "storeid"});

  return {
    address,
    addresstype,
    billofmaterials,
    businessentity,
    businessentityaddress,
    businessentitycontact,
    contacttype,
    countryregion,
    countryregioncurrency,
    creditcard,
    culture,
    currency,
    currencyrate,
    customer,
    department,
    document,
    emailaddress,
    employee,
    employeedepartmenthistory,
    employeepayhistory,
    illustration,
    jobcandidate,
    location,
    password,
    person,
    personcreditcard,
    personphone,
    phonenumbertype,
    product,
    productcategory,
    productcosthistory,
    productdescription,
    productdocument,
    productinventory,
    productlistpricehistory,
    productmodel,
    productmodelillustration,
    productmodelproductdescriptionculture,
    productphoto,
    productproductphoto,
    productreview,
    productsubcategory,
    productvendor,
    purchaseorderdetail,
    purchaseorderheader,
    salesorderdetail,
    salesorderheader,
    salesorderheadersalesreason,
    salesperson,
    salespersonquotahistory,
    salesreason,
    salestaxrate,
    salesterritory,
    salesterritoryhistory,
    scrapreason,
    shift,
    shipmethod,
    shoppingcartitem,
    specialoffer,
    specialofferproduct,
    stateprovince,
    store,
    transactionhistory,
    transactionhistoryarchive,
    unitmeasure,
    vendor,
    workorder,
    workorderrouting,
  };
}

const models = initModels(sequelize)
export default models
export {sequelize}

// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
