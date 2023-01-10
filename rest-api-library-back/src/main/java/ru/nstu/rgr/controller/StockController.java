package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Stock;
import ru.nstu.rgr.service.StockService;

import java.util.List;

@RestController
@RequestMapping("/stock")
@RequiredArgsConstructor
public class StockController {
    private final StockService stockService;

    @ApiOperation("Receive all stock")
    @GetMapping
    public List<Stock> getAllStock() {
        return stockService.findAll();
    }

    @ApiOperation("Create a stock")
    @PostMapping
    public Stock create(@RequestBody Stock stock){
        return stockService.save(stock);
    }

    @ApiOperation("Edit a stock")
    @PutMapping("/{id}")
    public Stock edit(@PathVariable Long id, @RequestBody Stock stock){
        return stockService.edit(id, stock);
    }

    @ApiOperation("Delete a stock")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        stockService.delete(id);
    }
}
