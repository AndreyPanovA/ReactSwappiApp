const SwappiServ = new (class SwappiService {
  _apiBase = "https://swapi.dev/api";
  async getResourse(url) {
    return await (await fetch(`${this._apiBase}${url}`)).json();
  }
  async getAllPeople() {
    return (await this.getResourse("/people/")).results;
  }
  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }
  async getAllPlanets() {
    return (await this.getResourse("/planets/")).results;
  }
  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }
  async getAllStarships() {
    return (await this.getResourse("/starships/")).results;
  }
  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
})();

export default SwappiServ;
