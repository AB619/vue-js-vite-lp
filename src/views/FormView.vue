<template>
    <div class="root">
        <Form class="form" :validation-schema="schema" @submit="apply">
            <div class="form__field-wrapper">
                <span class="form__field-label">First name</span>
                <Field class="form__field" name="firstName" type="text" />
                <ErrorMessage name="firstName" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Last name</span>
                <Field class="form__field" name="lastName" type="text" />
                <ErrorMessage name="lastName" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Gender</span>
                <Field class="form__field" name="gender" as="select">
                    <option v-for="gender in genders" :value="gender" :key="gender">{{ gender }}</option>
                </Field>
                <ErrorMessage name="gender" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Birth date</span>
                <Field class="form__field" name="birthDate" type="text" />
                <ErrorMessage name="birthDate" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Mobile phone</span>
                <Field class="form__field" name="mobilePhone" type="text" />
                <ErrorMessage name="mobilePhone" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Number of dependants</span>
                <Field class="form__field" name="numberOfDependants" type="number" v-model="numberOfDependants" />
                <ErrorMessage name="numberOfDependants" class="form__field-error" />
            </div>

            <div class="form__field-wrapper" v-if="childCareCostsVisible">
                <span class="form__field-label">Child care cost</span>
                <Field class="form__field" name="childCareCosts" type="text" />
                <ErrorMessage name="childCareCosts" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Employment status</span>
                <Field class="form__field" name="employmentStatus" as="select" v-model="employmentStatus">
                    <option v-for="employmentStatus in employmentStatuses" :value="employmentStatus"
                        :key="employmentStatus">
                        {{ employmentStatus }}
                    </option>
                </Field>
                <ErrorMessage name="employmentStatus" class="form__field-error" />
            </div>

            <div class="form__field-wrapper" v-if="companyNameVisible">
                <span class="form__field-label">Company name</span>
                <Field class="form__field" name="companyName" type="text" />
                <ErrorMessage name="companyName" class="form__field-error" />
            </div>

            <div class="form__field-wrapper">
                <span class="form__field-label">Personal income</span>
                <Field class="form__field" name="personalIncome" type="text" />
                <ErrorMessage name="personalIncome" class="form__field-error" />
            </div>

            <button class="form__button" type="submit">Apply</button>
        </Form>
        <div>
            <RouterLink to="/movies">
                <button>Go to Movies App</button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string, date } from 'yup';

const genders = ['Mr', 'Mrs', 'Miss', 'Ms']
const employmentStatuses = ['Full time', 'Part time', 'Unemployed', 'Retired']

const numberOnlyRegex = /^\d+$/
const mobilePhoneRegex =
    /^(?:(?:\+\s*(?:4\s*){2}[1|2]|0\s*[1|2])\s*(?:\d\s*){8,9}|(?:\+\s*(?:4\s*){2}7|0\s*7)\s*(?:\d\s*){9})$/ // GB number like: 07111111111

const userNameRegex = /^(?:[a-zA-Z][a-zA-Z\s\\.\-']{1,29})$/ // at least 2 characters, and can only include letters, apostrophes, hyphens and full stops

const numberOfDependants = ref<number>();
const childCareCostsVisible = computed(() => showChildCareCosts(numberOfDependants.value));

const employmentStatus = ref<string>('');
const companyNameVisible = computed(() => showCompanyName(employmentStatus.value));

const showChildCareCosts = (numberOfDependants: number | undefined = 0) => numberOfDependants > 0;
const showCompanyName = (companyName: string) => companyName === 'Full time' || companyName === 'Part time';

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 100);

const schema = object({
    firstName: string().required('First name is required').matches(userNameRegex, 'Invalid format'),
    lastName: string().required('Last name is required').matches(userNameRegex, 'Invalid format'),
    gender: string().required('Gender is required').oneOf(genders),
    birthDate: date().required('Birth date is required').min(minDate, 'Must be over 18 years old').max(maxDate, 'Must be under 100 years old'),
    mobilePhone: string().required('Mobile Phone is required').matches(mobilePhoneRegex, 'Invalid format. Should be Mobile Number.'),
    numberOfDependants: string().matches(numberOnlyRegex, 'Invalid format. Should be number and greater than 0.'),
    childCareCosts: string().when('numberOfDependants', {
        is: showChildCareCosts,
        then: (schema) => schema.required('Child care cost is required').matches(numberOnlyRegex, 'Invalid format. Should be number.').max(1000000, 'Must be below 1,000,000'),
        otherwise: (schema) => schema
    }),
    employmentStatus: string().required('Employemnt status is required').oneOf(employmentStatuses),
    companyName: string().when('employmentStatus', {
        is: showCompanyName,
        then: (schema) => schema.required('Company Name is required'),
        otherwise: (schema) => schema
    }),
    personalIncome: string().matches(numberOnlyRegex, 'Invalid format. Should be number.').min(1000, 'Must be above 1000').max(1000000, 'Must be below 1,000,000'),
})

const apply = (values) => {
    alert("Form Submitted Successfully");
    console.log(JSON.stringify(values, null, 2));
}

</script>

<style scoped>
.root {
    display: flex;
}

.form {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    max-width: 300px;
    padding: 16px;
    background: #f3f3f3;
    border: 1px solid #d7d7d7;
    border-radius: 2px;
}

.form__field-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
}

.form__field-error {
    font-size: 12px;
    line-height: 14px;
    color: #d00101;
}

.form__field {
    padding: 5px;
    color: #4a516a;
    border-radius: 4px;
}

.form__button {
    align-self: center;
    padding: 8px 12px;
    color: #ffffff;
    background: #03bf03;
    border-radius: 2px;
}
</style>