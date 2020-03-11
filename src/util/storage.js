const storage = sessionStorage

export default {
	set(key, val) {
		storage.setItem(key, typeof val !== 'string' ? JSON.stringify(val): val);
	},
	get(key) {
		return storage.getItem(key);
	},
	remove(key){
		storage.removeItem(key)
	},
	clear() {
		storage.clear();
	}
}