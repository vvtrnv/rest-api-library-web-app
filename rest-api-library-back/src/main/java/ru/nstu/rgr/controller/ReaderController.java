package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Reader;
import ru.nstu.rgr.service.ReadersService;

import java.util.List;

@RestController
@RequestMapping("/reader")
@RequiredArgsConstructor
public class ReaderController {
    private final ReadersService readersService;

    @ApiOperation("Receive all readers")
    @GetMapping
    public List<Reader> getAllReader() {
        return readersService.findAll();
    }

    @ApiOperation("Create a reader")
    @PostMapping
    public Reader create(@RequestBody Reader reader){
        return readersService.save(reader);
    }

    @ApiOperation("Edit a reader")
    @PutMapping("/{id}")
    public Reader edit(@PathVariable Long id, @RequestBody Reader reader){
        return readersService.edit(id, reader);
    }

    @ApiOperation("Delete a reader")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        readersService.delete(id);
    }
}
