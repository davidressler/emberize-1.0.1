Ruby.Listing = DS.Model.extend({
    price: DS.attr('number'),
    beds: DS.attr('number')
});



//////////////////////////
// FIXTURES
//////////////////////////

Ruby.Listing.FIXTURES = [
	{
		id: 1,
		price: 125,
        beds: 0
	},
	{
		id: 2,
		price: 455,
        beds: 2
	},
    {
		id: 3,
		price: 225,
        beds: 1
	},
	{
		id: 4,
		price: 355,
        beds: 2
	},
    {
		id: 5,
		price: 325,
        beds: 2
	},
	{
		id: 6,
		price: 255,
        beds: 1
	},
    {
		id: 7,
		price: 425,
        beds: 2
	},
	{
		id: 8,
		price: 755,
        beds: 3
	},
	{
		id: 9,
		price: 825,
        beds: 2
	},
	{
		id: 10,
		price: 785,
        beds: 3
	},
    {
		id: 11,
		price: 285,
        beds: 1
	},
	{
		id: 12,
		price: 305,
        beds: 1
	},
    {
		id: 13,
		price: 925,
        beds: 3
	},
	{
		id: 14,
		price: 755,
        beds: 4
	},
    {
		id: 15,
		price: 485,
        beds: 3
	},
	{
		id: 16,
		price: 455,
        beds: 3
	}
];