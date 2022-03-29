package com.kp.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/book")
public class EventBookingController {
	@Autowired
	EventRepository bookRepository;

	@GetMapping("/{id}")
	public ResponseEntity<Event> getBookById(@PathVariable("id") Integer id) {

		Optional<Event> book = bookRepository.findById(id);
		if (book.isPresent()) {
			return new ResponseEntity<>(book.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/list")
	public ResponseEntity<List<Event>> getAllBooks() {
		try {
			List<Event> books = bookRepository.findAll();
			if (books.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<Event> addBook(@RequestBody Event model) {
		try {
			Event book = bookRepository.save(model);
			return new ResponseEntity<>(book, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Event> updateBook(@PathVariable("id") Integer id, @RequestBody Event model) {
		Optional<Event> existingBook = bookRepository.findById(id);
		if (existingBook.isPresent()) {
			Event book = existingBook.get();
			book.setApplicantAddress(model.getApplicantAddress());
			book.setApplicantEmailId(model.getApplicantEmailId());
			book.setApplicantMobileNo(model.getApplicantMobileNo());
			book.setApplicantName(model.getApplicantName());
			book.setEventAddress(model.getEventAddress());
			book.setEventDate(model.getEventDate());
			book.setEventName(model.getEventName());
			book.setEventTime(model.getEventTime());
			book.setNoOfPeople(model.getNoOfPeople());
			book.setQuantityOfNonVeg(model.getQuantityOfNonVeg());
			book.setQuantityOfVeg(model.getQuantityOfVeg());
			book.setSelectAddOnCatogory(model.getSelectAddOnCatogory());
			book.setSelectFoodCatogory(model.getSelectFoodCatogory());
			book.setStatus(model.getStatus());
			
			return new ResponseEntity<>(bookRepository.save(book), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") Integer id) {
		try {
			bookRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
