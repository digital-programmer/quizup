import axios from "axios";
const QUIZ_API_TOKEN='DHbBL7tK3BI9FBpD4x9TGvZYXPTeapZdZFaP2uv2';
const apiClient = axios.create({
    baseURL: 'https://quizapi.io/api/v1',
    headers: {'X-Api-Key': QUIZ_API_TOKEN},
});

export default apiClient;