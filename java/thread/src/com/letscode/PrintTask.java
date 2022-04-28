package com.letscode;

public class PrintTask  {
    private final String taskName;

    // constructor
    public PrintTask(final int taskId) {
        this.taskName = "task_"+ taskId;
    }

    // print task name
    public void print() {
        System.out.printf("Task %s printed%n", taskName);
    }

}