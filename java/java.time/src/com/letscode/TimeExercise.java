package com.letscode;

import java.time.*;

public class TimeExercise {
    public static void main(String[] args) {
        System.out.println(returnDate (4));

        ZoneId zoneId = ZoneId.of("America/New_York");
        LocalDateTime localDateTime = LocalDateTime.now();
        ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, zoneId);
        System.out.println(zonedDateTime);
//        System.out.println("Em NY é: " + ZonedDateTime.now(ZoneId.of( "America/New_York" )));

        LocalDate dateBorn = LocalDate.parse("1998-03-03");
        System.out.println(dateBorn);
        dayOfWeekBorn(dateBorn);

        System.out.println(ConverterData.converterDataEAjustar ("2022-06-12"));
    }

    static LocalDate returnDate(long daysAgo) {
        LocalDate localDate = LocalDate.now();
        return localDate.minusDays(daysAgo);
    }

    static void dayOfWeekBorn (LocalDate date) {
        System.out.println(date.getDayOfWeek());
    }
}