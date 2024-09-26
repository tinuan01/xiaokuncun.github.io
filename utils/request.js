// export const BASE_URL = 'http://localhost:8080';
export const BASE_URL = 'http://111.67.201.139:8002';

export function request(config={}) {
	
	let {
		url,
		data={},
		method='GET'
	} = config
	
	url = BASE_URL + url
	
	return new Promise((resolve,reject) => {
		
		uni.request({
			url,
			data,
			method,
			success:res => {
				if(res.data.code === 200){
					resolve(res)
				}else {
					uni.showModal({
						title:"错误提示",
						content:res.data.msg,
						showCancel:false
					})
					reject(res.data)
				}
				
			},
			fail:err => {
				reject(err)
			}
		})
	})
	
}