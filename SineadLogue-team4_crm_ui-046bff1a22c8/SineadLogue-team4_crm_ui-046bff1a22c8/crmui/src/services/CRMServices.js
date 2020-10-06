import http from "../http-common";

export class CRMService {

    getStatus() {
        return http.get("/status");
    }

    getAll() {
        return http.get("/findall");
    }

    get(id) {
        return http.get(`/findbtcustid/${id}`);
    }

    save(data) {
        return http.post("/save", data);
    }

    saveInteraction (data) {
        return http.post("/saveInteraction", data);
    }
}

export default new CRMService();