package com.eventportal.util;

import java.io.IOException;
import java.nio.file.*;

public class FileUploadUtil {

    public static void saveFile(String uploadDir,String fileName,byte[] content) throws IOException{
        Path dir=Paths.get(uploadDir);
        Files.createDirectories(dir);
        Files.write(dir.resolve(fileName),content);
    }
}
