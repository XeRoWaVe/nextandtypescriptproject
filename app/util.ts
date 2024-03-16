

export const geoUrl = 'https://referential.p.rapidapi.com/v1/city?fields=iso_a2%2Cstate_code%2Cstate_hasc%2Ctimezone%2Ctimezone_offset&iso_a2=us&state_hasc=${state}&lang=en&limit=250';
export const geoOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a90b7381a7msh3a4ab4fe512403dp1ad821jsn285dfc8b5038',
		'X-RapidAPI-Host': 'referential.p.rapidapi.com'
	}
};

