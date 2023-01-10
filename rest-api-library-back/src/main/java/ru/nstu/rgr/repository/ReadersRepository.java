package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Reader;

@Repository
public interface ReadersRepository extends JpaRepository<Reader, Long> {
}
