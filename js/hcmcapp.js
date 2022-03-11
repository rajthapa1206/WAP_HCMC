/**
 * hcmcapp.js
 * @author raj
 * @since 2022-03-10
 */
"use strict";
import { Patient } from "./model/patient.js";
$(document).ready(function(){
    const patientsData = [];
    $("#formNewPatient").submit(function(event){
        event.preventDefault();
        console.log(event.target);
        const patientIdNo = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleInitial = $("#middleInitials").val();
        const lastName = $("#lastName").val();
        const dateOfBirth = $("#dateOfBirth").val();
        const department = $("#ddlDepartment").val();
        const outPatient = $("input[type='radio']:checked").val();
        console.log("test" + outPatient);
        const newPatient = new Patient(patientIdNo, firstName, middleInitial, lastName, dateOfBirth, department, outPatient);
        patientsData.push(newPatient);
        createPatient(newPatient);
        $("#patientIdNumber").val("");
        $("#firstName").val("");
        $("#middleInitials").val("");
        $("#lastName").val("");
        $("#dateOfBirth").val("");
        $("#ddlDepartment").val("");
        var ele = document.getElementsByName("radioIsOutPatient");
        for(var i=0;i<ele.length;i++)
        ele[i].checked = false;

    });
    const chkElderly = document.getElementById('chkElderlyPatients');
    const chkOutPatient = document.getElementById('chkShowOutPatients');
    chkElderly.addEventListener('change', e => {
        let trList = document.querySelectorAll('#tbodyPatientsList tr:not(.elderly)');
        //console.log(e.target.checked);
        if (e.target.checked) {            
            trList.forEach((item) => { 
                //console.log(item.style.display);
                if(item.style.display != 'none') item.style.display = 'none'; });
        } else {
            trList.forEach((item) => { 
                //console.log(item.style.display);
                if(item.style.display != 'table-row') item.style.display = 'table-row'; });
        }
    });
    chkOutPatient.addEventListener('change', e => {
        let trList = document.querySelectorAll('#tbodyPatientsList tr:not(.outPatient)');
        //console.log(e.target.checked);
        if (e.target.checked) {
            trList.forEach((item) => { 
                //console.log(item.style.display);
                if(item.style.display != 'none') item.style.display = 'none'; });
        } else {
            trList.forEach((item) => { 
                //console.log(item.style.display);
                if(item.style.display != 'table-row') item.style.display = 'table-row'; });
        }
    });
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    function createPatient(newPatient){
        const tblPatients = document.querySelector("#tbodyPatientsList");
        const newRow = tblPatients.insertRow(-1);
        //cell PatientIdNo
        const newCellPatientIdNo = newRow.insertCell(0);
        const strNewPatientIdNo = document.createTextNode(`${newPatient.getPatientIdNo()}`);
        newCellPatientIdNo.appendChild(strNewPatientIdNo);
        //cell FirstName
        const newFirstName = newRow.insertCell(1);
        const strNewFirstName = document.createTextNode(`${newPatient.getFirstName()}`);
        newFirstName.appendChild(strNewFirstName);
        //cell MiddleInitial
        const newMiddleInitial = newRow.insertCell(2);
        const strNewMiddleInitial = document.createTextNode(`${newPatient.getMiddleInitial()}`);
        newMiddleInitial.appendChild(strNewMiddleInitial);
        //cell LastName
        const newLastName = newRow.insertCell(3);
        const strNewLastName = document.createTextNode(`${newPatient.getLastName()}`);
        newLastName.appendChild(strNewLastName);
        //cell Date Of Birth
        const newDateOfBirth = newRow.insertCell(4);
        const strDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
        newDateOfBirth.appendChild(strDateOfBirth);
        console.log(getAge(`${newPatient.getDateOfBirth()}`));
        if(getAge(`${newPatient.getDateOfBirth()}`) >= 65){
            newRow.classList.add('elderly');
        }
        console.log(`${newPatient.getDateOfBirth()}`);
        //cell Department
        const newDepartment = newRow.insertCell(5);
        const strDepartment = document.createTextNode(`${newPatient.getDepartment()}`);
        newDepartment.appendChild(strDepartment);
        //cell FirstName
        const newOutPatient = newRow.insertCell(6);
        const strOutPatient = document.createTextNode(`${newPatient.getOutPatient()}`);
        newOutPatient.appendChild(strOutPatient);
        if(`${newPatient.getOutPatient()}` == "Yes"){
            newRow.classList.add('outPatient');
        }
        console.log("New Patient Added");
    }
});