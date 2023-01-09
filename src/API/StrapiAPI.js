import axios from "axios";
import { token, server } from "../data/data";

export default class StrapiAPI {
    static async getLogo() {
        const response = await axios.get(`${server}/api/contents?populate=*`)
        return response.data;
    }

    static async getIntro() {
        const response = await axios.get(`${server}/api/intro-sections`)
        return response.data;
    }

    static async getBenefits() {
        const response = await axios.get(`${server}/api/benefits?populate=*`)
        return response.data;
    }

    static async getTypesSliders() {
        const response = await axios.get(`${server}/api/type-sliders?populate=*`)
        return response.data;
    }

    static async getSourses() {
        const response = await axios.get(`${server}/api/data-sourses?populate=*`)
        return response.data;
    }

    static async getDashboard() {
        const response = await axios.get(`${server}/api/dashbords?populate=*`)
        return response.data;
    }

    static async getSocials() {
        const response = await axios.get(`${server}/api/socials`)
        return response.data;
    }

    static async getWorks() {
        const response = await axios.get(`${server}/api/how-we-works`)
        return response.data;
    }
}