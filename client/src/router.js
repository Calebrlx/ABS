import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import AboutComponent from './components/about/Overview.vue';
import KellyComponent from './components/about/Kelly.vue';
import AmandaComponent from './components/about/Amanda.vue';
import GettingStartedComponent from './components/getting-started/Overview.vue';
import FaqsComponent from './components/getting-started/FAQs.vue';
import ClientFormsComponent from './components/getting-started/ClientForms.vue';
import InsuranceComponent from './components/getting-started/Insurance.vue';
import ServicesComponent from './components/services/Overview.vue';
import ClinicServicesComponent from './components/services/ClinicServices.vue';
import SchoolServicesComponent from './components/services/SchoolServices.vue';
import InHomeServicesComponent from './components/services/InHomeServices.vue';
import EmploymentComponent from './components/Employment.vue';
import ContactComponent from './components/Contact.vue';


const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/kelly', component: KellyComponent },
  { path: '/amanda', component: AmandaComponent },
  { path: '/getting-started', component: GettingStartedComponent },
  { path: '/faqs', component: FaqsComponent },
  { path: '/client-forms', component: ClientFormsComponent },
  { path: '/insurance', component: InsuranceComponent },
  { path: '/services', component: ServicesComponent },
  { path: '/clinic-services', component: ClinicServicesComponent },
  { path: '/school-services', component: SchoolServicesComponent },
  { path: '/in-home-services', component: InHomeServicesComponent },
  { path: '/employment', component: EmploymentComponent },
  { path: '/contact', component: ContactComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;
