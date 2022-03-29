package com.kp.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "event")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name = "eventName")
	private String eventName;
	
	@Column(name = "applicantName")
	private String applicantName;
	
	@Column(name = "applicantAddress")
	private String applicantAddress;
	
	@Column(name = "applicantMobileNo")
	private String applicantMobileNo;
	
	@Column(name = "applicantEmailId")
	private String applicantEmailId;

	@Column(name = "eventAddress")
	private String eventAddress;

	@Column(name = "eventDate")
	private String eventDate;

	@Column(name = "eventTime")
	private String eventTime;

	@Column(name = "noOfPeople")
	private String noOfPeople;

	@Column(name = "selectFoodCatogory")
	private String selectFoodCatogory;
	@Column(name = "quantityOfVeg")
	private String quantityOfVeg;
	@Column(name = "quantityOfNonVeg")
	private String quantityOfNonVeg;
	@Column(name = "selectAddOnCatogory")
	private String selectAddOnCatogory;
	@Column(name = "status")
	private String status;


	public Event() { }


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getEventName() {
		return eventName;
	}


	public void setEventName(String eventName) {
		this.eventName = eventName;
	}


	public String getApplicantName() {
		return applicantName;
	}


	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}


	public String getApplicantAddress() {
		return applicantAddress;
	}


	public void setApplicantAddress(String applicantAddress) {
		this.applicantAddress = applicantAddress;
	}


	public String getApplicantMobileNo() {
		return applicantMobileNo;
	}


	public void setApplicantMobileNo(String applicantMobileNo) {
		this.applicantMobileNo = applicantMobileNo;
	}


	public String getApplicantEmailId() {
		return applicantEmailId;
	}


	public void setApplicantEmailId(String applicantEmailId) {
		this.applicantEmailId = applicantEmailId;
	}


	public String getEventAddress() {
		return eventAddress;
	}


	public void setEventAddress(String eventAddress) {
		this.eventAddress = eventAddress;
	}


	public String getEventDate() {
		return eventDate;
	}


	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}


	public String getEventTime() {
		return eventTime;
	}


	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}


	public String getNoOfPeople() {
		return noOfPeople;
	}


	public void setNoOfPeople(String noOfPeople) {
		this.noOfPeople = noOfPeople;
	}


	public String getSelectFoodCatogory() {
		return selectFoodCatogory;
	}


	public void setSelectFoodCatogory(String selectFoodCatogory) {
		this.selectFoodCatogory = selectFoodCatogory;
	}


	public String getQuantityOfVeg() {
		return quantityOfVeg;
	}


	public void setQuantityOfVeg(String quantityOfVeg) {
		this.quantityOfVeg = quantityOfVeg;
	}


	public String getQuantityOfNonVeg() {
		return quantityOfNonVeg;
	}


	public void setQuantityOfNonVeg(String quantityOfNonVeg) {
		this.quantityOfNonVeg = quantityOfNonVeg;
	}


	public String getSelectAddOnCatogory() {
		return selectAddOnCatogory;
	}


	public void setSelectAddOnCatogory(String selectAddOnCatogory) {
		this.selectAddOnCatogory = selectAddOnCatogory;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}

	
	
	
	
	
}
