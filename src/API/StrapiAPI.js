import axios from "axios";
import { token, server } from "../data/data";

export default class StrapiAPI {
    static async getLogo() {
        const response = await axios.get(`${server}api/contents?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }

    static async getIntro() {
        const response = await axios.get(`${server}api/intro-sections`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }

    static async getBenefits() {
        const response = await axios.get(`${server}api/benefits?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }
}