package com.letscode;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class PrintServiceModern {

    private static final int NUM_TASKS = 10;

    public static void main(String[] args) {
        final ExecutorService service = Executors.newSingleThreadExecutor();
//        Executors.newCachedThreadPool();
//        Executors.newFixedThreadPool(3);
        try {
            for (int i = 1; i <= NUM_TASKS; i++) {
                final PrintTask printTaskLambda = new PrintTask(i);
                service.execute(printTaskLambda::print);
            }
        } finally {
            service.shutdown();
        }
    }
}
