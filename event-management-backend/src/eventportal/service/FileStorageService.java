package com.eventportal.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String uploadFile(MultipartFile file);

    byte[] downloadFile(String fileName);

    boolean deleteFile(String fileName);
}
