package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Author;
import ru.nstu.rgr.service.AuthorsService;
import java.util.List;

@RestController
@RequestMapping("/author")
@RequiredArgsConstructor
public class AuthorController {
    private final AuthorsService authorsService;

    @ApiOperation("Receive all authors")
    @GetMapping
    public List<Author> getAllAuthors() {
        return authorsService.findAll();
    }

    @ApiOperation("Create a author")
    @PostMapping
    public Author create(@RequestBody Author author){
        return authorsService.save(author);
    }

    @ApiOperation("Edit a author")
    @PutMapping("/{id}")
    public Author edit(@PathVariable Long id, @RequestBody Author author){
        return authorsService.edit(id, author);
    }

    @ApiOperation("Delete a author")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        authorsService.delete(id);
    }
}
