package ru.nstu.rgr.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "stock")
@Data
public class Stock {

    @Id
    @Column(name = "inventory_id")
    private Long inventoryId;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "book_id", referencedColumnName = "id", nullable = false)
    private Book bookByBookId;

}
