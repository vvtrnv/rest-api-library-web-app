package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Book;
import ru.nstu.rgr.model.Reader;
import ru.nstu.rgr.service.BooksService;

import java.util.List;

@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {
    private final BooksService booksService;

    @ApiOperation("Receive all books")
    @GetMapping
    public List<Book> getAllBooks() {
        return booksService.findAll();
    }

    @ApiOperation("Create a book")
    @PostMapping
    public Book create(@RequestBody Book book){
        return booksService.save(book);
    }

    @ApiOperation("Edit a book")
    @PutMapping("/{id}")
    public Book edit(@PathVariable Long id, @RequestBody Book book){
        return booksService.edit(id, book);
    }

    @ApiOperation("Delete a book")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        booksService.delete(id);
    }
}
