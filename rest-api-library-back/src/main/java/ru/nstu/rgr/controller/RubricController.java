package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Author;
import ru.nstu.rgr.model.Rubric;
import ru.nstu.rgr.service.RubricsService;

import java.util.List;

@RestController
@RequestMapping("/rubric")
@RequiredArgsConstructor
public class RubricController {
    private final RubricsService rubricsService;

    @ApiOperation("Receive all rubrics")
    @GetMapping
    public List<Rubric> getAllRubrics() {
        return rubricsService.findAll();
    }

    @ApiOperation("Create a rubric")
    @PostMapping
    public Rubric create(@RequestBody Rubric rubric){
        return rubricsService.save(rubric);
    }

    @ApiOperation("Edit a rubric")
    @PutMapping("/{id}")
    public Rubric edit(@PathVariable Long id, @RequestBody Rubric rubric){
        return rubricsService.edit(id, rubric);
    }

    @ApiOperation("Delete a rubric")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        rubricsService.delete(id);
    }
}
