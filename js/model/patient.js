/**
 * patient.js
 * @author raj
 * @since 2022-03-10
 */
 "use strict";
 export class Patient {
     #patientIdNo = null;
     #firstName = null;
     #middleInitial = null;
     #lastName = null;
     #dateOfBirth = null;
     #department = null;
     #outPatient = null;
     
     constructor(patientIdNo, firstName, middleInitial, lastName, dateOfBirth, department, outPatient){
         this.#patientIdNo = patientIdNo;
         this.#firstName = firstName;
         this.#middleInitial = middleInitial;
         this.#lastName = lastName;
         this.#dateOfBirth = dateOfBirth;
         this.#department = department;
         this.#outPatient = outPatient;
     }
     
     getPatientIdNo() { return this.#patientIdNo; }
     getFirstName() { return this.#firstName; }
     getMiddleInitial() { return this.#middleInitial; }
     getLastName() { return this.#lastName; }
     getDateOfBirth() { return this.#dateOfBirth; }
     getDepartment() { return this.#department; }
     getOutPatient() { return this.#outPatient; }

     setPatientIdNo(patientIdNo){
         this.#patientIdNo = patientIdNo;
     }
     setFirstName(firstName){
         this.#firstName = firstName;
     }
     setMiddleInitial(middleInitial){
         this.#middleInitial = middleInitial;
     }
     setLastName(lastName){
         this.#lastName = lastName;
     }
     setDateOfBirth(dateOfBirth){
         this.#dateOfBirth = dateOfBirth;
     }
     setDepartment(department){
         this.#department = department;
     }
     setOutPatient(outPatient){
         this.#outPatient = outPatient;
     }

     toString(){
         return `{PatientIdNo: ${this.#patientIdNo}, FirstName: ${this.#firstName},
            MiddleInitial: ${this.#middleInitial}, LastName: ${this.#lastName}, 
            DateOfBirth: ${this.#dateOfBirth}, Department: ${this.#department},
        OutPatient: ${this.#outPatient}}`;
     }
 }