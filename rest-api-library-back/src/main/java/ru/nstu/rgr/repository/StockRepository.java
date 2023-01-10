package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
}
