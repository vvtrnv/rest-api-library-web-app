package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Publisher;

@Repository
public interface PublishersRepository extends JpaRepository<Publisher, Long> {
}
