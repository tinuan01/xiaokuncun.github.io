import {
	request
} from "@/utils/request.js"

// export function apiGetHotRedBase() {
// 	return request({
// 		url: "/front/systemHome/getHotRedBase",
// 		method:"get"
// 	})
// }

export function apigetWeatherNow(location) {
	return request({
		url: "/front/systemHome/getWeatherNow/" + location,
		method:"get",
		// data:{}
	})
}

export function apiGetWeatherCityList() {
	return request({
		url: "/front/systemHome/getCityNameList",
		method:"get",
	})
}
