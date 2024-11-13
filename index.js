import express from "express"
const app = express();
const PORT = process.env.PORT || 4000
const BASE_URL = "https://en.wikipedia.org/w/api.php?action=opensearch"

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/search", async (request, response) => {

	const data = await getData(request.query)
	// Parse data into suitable object for wikiFree
	try {
		const parsed = data[1].map((element, idx) => {
			return {
				title: element,
				href: data[3][idx]
			}
		});
		response.send(parsed);
	} catch (error) {
		response.send(error)
	}
});

async function getData(query) {
	try {
		const url = `${BASE_URL}&search=${query?.searchTerm}&limit=${query?.limit}`
		const response = await fetch(url);
		if (!response.ok) {
			console.error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		console.log(json);
		return json
	} catch (error) {
		console.error(error.message);
	}
}

app.listen(PORT)