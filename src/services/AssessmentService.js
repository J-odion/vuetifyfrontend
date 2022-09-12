import axios from 'axios';
import Vue from "vue";

const PREPARATION_API_BASE_URL = Vue.prototype.$apiurl + 'preparation/';
const ASSESSMENT_OPTIONS_BASE_URL = PREPARATION_API_BASE_URL + 'option/';

const ASSESSMENT_API_BASE_URL = Vue.prototype.$apiurl + 'assessment/';
const SHARE_API_BASE_URL = ASSESSMENT_API_BASE_URL + 'share/';
const DIMENSIONS_API_BASE_URL = ASSESSMENT_API_BASE_URL + 'dimension/';
const METRIC_API_BASE_URL = ASSESSMENT_API_BASE_URL + 'metric/';
const SCORE_API_BASE_URL = ASSESSMENT_API_BASE_URL + 'score/';
const RESULT_API_BASE_URL = ASSESSMENT_API_BASE_URL + 'result/';
const REPORT_API_BASE_URL = ASSESSMENT_API_BASE_URL + 'report/';

class AssessmentService {

    getAssessmentOptions(){
        return axios.get(ASSESSMENT_OPTIONS_BASE_URL);
    }

    startAssessment(configuration){
        return axios.post(PREPARATION_API_BASE_URL, configuration);
    }

    resumeAssessment(assessmentUuid){
        return axios.get(PREPARATION_API_BASE_URL + assessmentUuid);
    }

    shareAssessment(expert){
        return axios.post(SHARE_API_BASE_URL, expert, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }

    getDimensions(){
        return axios.get(DIMENSIONS_API_BASE_URL, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }

    getDimension(dimensionId){
        return axios.get(DIMENSIONS_API_BASE_URL + dimensionId, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }

    getMetricById(metricId){
        return axios.get(METRIC_API_BASE_URL + metricId, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }

    sendScore(score){
        return axios.post(SCORE_API_BASE_URL, score, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }

    getResult(){
        return axios.get(RESULT_API_BASE_URL, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }

    sendReport(){
        return axios.get(REPORT_API_BASE_URL, { headers: { Authorization: Vue.prototype.$assessmentUuid}});
    }
}

export default new AssessmentService();