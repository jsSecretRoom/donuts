class DonutsGoodsService {
  getResurse = async (url) => {
    try {
      let res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url} status: ${res.status}`);
      }

      return await res.json();

    } catch (error) {
      console.error(error);
      return null;
    }
  }
  getDonutsSet = () => {
    return this.getResurse('./src/js/goods.json');
  }
}
export default DonutsGoodsService;
