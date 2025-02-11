package org.babyfish.jimmer.sql.model.time;

import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.Id;

import java.time.LocalDateTime;

@Entity
public interface Log {

    @Id
    long id();

    LocalDateTime createdTime();
}


