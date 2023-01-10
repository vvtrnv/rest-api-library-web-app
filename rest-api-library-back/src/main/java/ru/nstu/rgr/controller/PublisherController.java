package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Publisher;
import ru.nstu.rgr.service.PublishersService;

import java.util.List;

@RestController
@RequestMapping("/publisher")
@RequiredArgsConstructor
public class PublisherController {

    private final PublishersService publishersService;

    @ApiOperation("Receive all publishers")
    @GetMapping
    public List<Publisher> getAllPublishers() {
        return publishersService.findAll();
    }

    @ApiOperation("Create a publisher")
    @PostMapping
    public Publisher create(@RequestBody Publisher publisher){
        return publishersService.save(publisher);
    }

    @ApiOperation("Edit a publisher")
    @PutMapping("/{id}")
    public Publisher edit(@PathVariable Long id, @RequestBody Publisher publisher){
        return publishersService.edit(id, publisher);
    }

    @ApiOperation("Delete a publisher")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        publishersService.delete(id);
    }
}
